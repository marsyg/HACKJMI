import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// Sample Badges Data (create these first)
const badges = [
  {
    id: 'badge_001',
    name: 'Streak Starter',
    description: 'Maintained a 3-day learning streak',
    iconUrl: 'https://i.imgur.com/1a2b3c4.png',
    createdAt: new Date('2024-01-01T08:00:00Z'),
  },
  {
    id: 'badge_002',
    name: 'Note Master',
    description: 'Created 10+ video notes',
    iconUrl: 'https://i.imgur.com/5d6e7f8.png',
    createdAt: new Date('2024-01-02T09:30:00Z'),
  },
  {
    id: 'badge_003',
    name: 'Early Bird',
    description: 'Joined in the first month of launch',
    iconUrl: 'https://i.imgur.com/9g0h1i2.png',
    createdAt: new Date('2024-01-03T10:45:00Z'),
  },
];

// Sample User Data
const users = [
  {
    id: 'user_001',
    clerkId: 'user_2fDzq3sT4xYVg9kJbZ8mNlWpAqB',
    email: 'john.doe@example.com',
    username: 'john_learner',
    avatarUrl: 'https://i.imgur.com/xYzAbC1.jpg',
    tokens: 150,
    streak: 5,
    createdAt: new Date('2024-01-05T14:20:00Z'),
    updatedAt: new Date('2024-01-10T16:30:00Z'),
    badges: {
      connect: [{ id: 'badge_001' }, { id: 'badge_002' }],
    },
    notes: [
      {
        id: 'note_001',
        videoId: 'video_123',
        content: 'Important concept about SaaS architecture...',
        timestamp: '00:05:30',
        createdAt: new Date('2024-01-06T09:15:00Z'),
      },
    ],
  },
];
async function main() {
  // Create Badges first
  await prisma.badge.createMany({
    data: badges,
    skipDuplicates: true,
  });

  // Create Users with relationships
  for (const user of users) {
    await prisma.user.create({
      data: {
        ...user,
        badges: user.badges,
        notes: {
          create: user.notes,
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
