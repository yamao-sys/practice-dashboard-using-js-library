# CLAUDE.md

必ず日本語で回答してください。
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a full-stack application with two main components:

- **Frontend**: Next.js 15 application in `client/` directory
- **Backend**: Ruby on Rails 8 API server in `api-server/` directory
- **Development**: Docker Compose setup for local development

## Essential Commands

### Frontend (client/)

```bash
# Development
pnpm dev                    # Start Next.js dev server with Turbopack
pnpm build                  # Build production application
pnpm start                  # Start production server
pnpm lint                   # Run ESLint
pnpm typecheck              # Run TypeScript type checking
pnpm format                 # Format code with Prettier
pnpm format:check           # Check code formatting

# API Generation
pnpm gen:api-spec           # Generate OpenAPI spec from TypeSpec
pnpm gen:api-spec:watch     # Watch TypeSpec files and regenerate
pnpm gen:api:client         # Generate API client from OpenAPI spec using Orval
pnpm diff:api-spec:check    # Verify TypeSpec and YAML are in sync
```

### Backend (api-server/)

```bash
bundle exec rails server    # Start Rails development server
bundle exec rspec           # Run test suite
bundle exec rails console   # Start Rails console
bundle exec ridgepole:migrate # Run database migrations
bundle exec rubocop         # Run Ruby linting
```

### Docker Development

```bash
docker-compose up           # Start all services (API server, database, client, LocalStack)
docker-compose up api_server # Start only API server and dependencies
docker-compose up client    # Start only client
```

## Architecture Overview

### Frontend Architecture

- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form for form management
- **File Uploads**: React Dropzone for file handling
- **API Client**: Auto-generated from OpenAPI spec using Orval

### Backend Architecture

- **Framework**: Ruby on Rails 8 (API-only mode)
- **Database**: MySQL 8.0 with Ridgepole for schema management
- **Authentication**: JWT with bcrypt for password hashing
- **File Storage**: Shrine with AWS S3 (LocalStack for development)
- **Testing**: RSpec with FactoryBot
- **API Documentation**: Generated from TypeSpec

### Development Workflow

1. API definitions are written in TypeSpec (in `client/api-spec/`)
2. OpenAPI YAML is generated from TypeSpec
3. Frontend API clients are auto-generated using Orval
4. Backend implements the API according to the OpenAPI spec

### Key File Locations

- **API Definitions**: `client/api-spec/*.tsp`
- **Generated API Client**: `client/apis/`
- **Frontend Components**: `client/feature/` (feature-based) and `client/shared/components/` (shared)
- **Backend Controllers**: `api-server/app/controllers/api/v1/`
- **Database Schemas**: `api-server/db/Schemafile` (Ridgepole)

## Development Environment

### Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **Database**: MySQL on port 3306
- **LocalStack S3**: http://localhost:4566

### File Organization

The frontend uses a feature-based architecture:

- `client/feature/[feature-name]/` - Feature-specific code (actions, hooks, components)
- `client/shared/` - Shared utilities, components, and providers
- `client/app/` - Next.js App Router pages and layouts

### Type Safety

- TypeScript is used throughout the frontend
- API types are automatically generated from OpenAPI specifications
- Run `pnpm typecheck` before committing changes

### Testing

- Backend tests use RSpec and should be run with `bundle exec rspec`
- Frontend currently has no test configuration specified

### Code Quality

- ESLint with Next.js and Prettier configurations
- Prettier with Tailwind CSS plugin for consistent formatting
- Ruby code uses RuboCop with Rails Omakase style guide
