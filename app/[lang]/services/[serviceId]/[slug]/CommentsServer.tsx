import React from "react";

type Comment = {
  id: string;
  author: string;
  comment: string;
  rating: number;
  date: string;
  likes: number;
  isLiked?: boolean;
  replies: Comment[];
  isAdmin?: boolean;
};

async function getComments(serviceId: string) {
  const url = `${process.env.API_URL}/comments?serviceId=${serviceId}`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text(); 
    console.error("Fetch error response:", text);
    return [];
  }

  const data = await res.json();
  return data.comments || [];
}

export default async function CommentsServer({ serviceId }: { serviceId: string }) {
  const comments = await getComments(serviceId);

  return (
    <div className="space-y-6">
      {comments.map((comment:any) => (
        <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
          <h4 className="font-semibold">{comment.author}</h4>
          <p>{comment.comment}</p>
          <div className="flex gap-3">
            <span>امتیاز: {comment.rating}</span>
            <span>لایک: {comment.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
