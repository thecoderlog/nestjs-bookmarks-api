# NestJS Bookmarks API

A complete REST API built with **NestJS 11**, **Prisma**, and **SQLite** — a Bookmark / Link Manager with five CRUD endpoints and DTO validation.

This is the companion code for the tutorial **"NestJS REST API Tutorial for C# & Angular Developers"** — built to map concepts you already know from .NET and Angular (dependency injection, decorators, modules) straight onto NestJS.

📺 **Watch the tutorial:** [NestJS REST API Tutorial for C# & Angular Developers](https://youtu.be/kLrkUh4VjVk)

## Stack

- NestJS 11
- Prisma + SQLite
- `class-validator` + `@nestjs/mapped-types` (`PartialType`) for DTOs
- Global `ValidationPipe` with `whitelist`, `transform`, and `forbidNonWhitelisted`

## Getting started

Requires Node.js 18+ (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Create your .env from the example
cp .env.example .env

# 3. Create the SQLite database and run migrations
npx prisma migrate dev

# 4. Start the dev server (watch mode)
npm run start:dev
```

The API runs at **http://localhost:3000**.

> Note: step 3 is the one the default NestJS README skips — without it there's no database, and the app won't start.

## Endpoints

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/bookmarks` | Create a bookmark |
| `GET` | `/bookmarks` | List bookmarks (filter with `?tag=`) |
| `GET` | `/bookmarks/:id` | Get a single bookmark |
| `PATCH` | `/bookmarks/:id` | Update a bookmark |
| `DELETE` | `/bookmarks/:id` | Delete a bookmark |

### Example requests (HTTPie)

```bash
# Create (fields follow the Bookmark model in prisma/schema.prisma)
http POST :3000/bookmarks url=https://nestjs.com title="NestJS docs" tags:='["nestjs","docs"]'

# List, filtered by tag
http :3000/bookmarks tag==nestjs

# Get one
http :3000/bookmarks/1
```

## Notes

- Tags are stored as a JSON-encoded string — a deliberate shortcut for the SQLite setup, explained in the video and slated for a proper Postgres migration in a later episode.

## More

- 📺 [The Coderlog on YouTube](https://youtube.com/@thecoderlog)
- ✍️ [coderlog.dev](https://coderlog.dev) — backend deep-dives

## License

MIT