// lib/seed.ts
import fs from 'fs/promises';
import path from 'path';
import Service from '../models/service.model';

export async function seedServices() {
  try {
    // خواندن فایل JSON
    const filePath = path.join(process.cwd(), 'data/services.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);

    // استخراج زبان‌ها (مثل fa, tr, ...)
    const languages = Object.keys(parsedData);

    // بررسی تعداد کل سرویس‌ها در دیتابیس
    const serviceCount = await Service.countDocuments();
    if (serviceCount > 0) {
      return;
    }

    // پیمایش در هر زبان
    for (const language of languages) {
      const services = parsedData[language].services || [];

      // ذخیره هر سرویس در دیتابیس
      for (const service of services) {
        const existingService = await Service.findOne({ serviceId: service.serviceId, language });
        if (!existingService) {
          await Service.create({
            language, // زبان به صورت پویا تنظیم می‌شود
            ...service,
          });
          console.log(`Service ${service.title} (${language}) saved successfully`);
        } else {
          console.log(`Service ${service.title} (${language}) already exists`);
        }
      }
    }

    console.log('All services seeded successfully!');
  } catch (error) {
    console.error('Error seeding services:', error);
  }
}