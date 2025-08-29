// app/api/services/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/libs/db';
import Service from '@/models/service.model';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  await connectDB();

  try {
    // خواندن فایل JSON
    const filePath = path.join(process.cwd(), 'data/services.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);

    const languages = Object.keys(parsedData);

    // پیمایش در هر زبان
    for (const language of languages) {
      const services = parsedData[language].services || []; 

      for (const service of services) {
        const existingService = await Service.findOne({ serviceId: service.serviceId, language });
        if (!existingService) {
          await Service.create({
            language,
            ...service,
          });
        }
      }
    }

    return NextResponse.json({ message: 'Services saved successfully!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save services' }, { status: 500 });
  }
}