const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const events = await prisma.event.findMany();
  for (const event of events) {
    if (event.slug.includes('https') || event.slug.includes('/')) {
      const newSlug = event.slug.replace(/https?:\/\//g, '').replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
      await prisma.event.update({ where: { id: event.id }, data: { slug: newSlug } });
      console.log('Fixed slug to', newSlug);
    }
  }
}
main().then(() => prisma.$disconnect());
