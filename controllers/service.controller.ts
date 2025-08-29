import Service from "@/models/service.model";

interface ServiceResponse {
  id: any;
  creator: string; 
  target: string; 
  targetModel?: "Service" | "Product";
  parentId?: string;
  comment: string;
  rating: number;
}

interface ApiServicesResponse {
  success: boolean;
  message?: string;
  services?: ServiceResponse[];
}

export async function getServices({ lang }: { lang: string }): Promise<ApiServicesResponse> {
  try {
    const services = await Service.find({ language: lang || "en" }).select(
      "serviceId title subtitle image color features"
    );


    if (services.length === 0) {
      return {
        success: false,
        message: "هیچ سرویسی یافت نشد",
        services: [],
      };
    }

    return {
      success: true,
      message: `با موفقیت ${services.length} سرویس دریافت شد`,
      services: services,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "خطا در دریافت سرویس‌ها",
      services: [],
    };
  }
}

interface ApiServiceResponse {
  success: boolean;
  message?: string;
  service?: any; 
}

export async function getService({ serviceId, lang }: { serviceId: string; lang: string }): Promise<ApiServiceResponse> {
  try {
    const service = await Service.findOne({ serviceId: serviceId, language: lang || "en" }).select(
      "serviceId title subtitle description image whyUs features"
    );

    if (!service) {
      return {
        success: false,
        message: "سرویس مورد نظر یافت نشد",
        service: null,
      };
    }

    return {
      success: true,
      message: "سرویس با موفقیت دریافت شد",
      service: service,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "خطا در دریافت سرویس",
      service: null,
    };
  }
}

interface GetServicesParams {
  lang?: string;
  query?: string;
}

export const getSearchServices = async ({ lang, query }: GetServicesParams): Promise<ApiServicesResponse> => {
  try {
    const filter: any = {};

    if (lang) filter.language = lang;

    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { subtitle: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ];
    }

const services = await Service.find(filter)
  .select('serviceId title  image ') 
  .limit(20);
    return { success: true, message: "موارد با موفقیت یافت شد", services };
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "خطای داخلی سرور" };
  }
};