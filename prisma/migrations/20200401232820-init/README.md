# Migration `20200401232820-init`

This migration has been generated at 4/1/2020, 11:28:20 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Course" (
    "GamerTag" text  NOT NULL DEFAULT '',
    "KD" text  NOT NULL DEFAULT '',
    "Platform" text  NOT NULL DEFAULT '',
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "id" text  NOT NULL ,
    "name" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200401232820-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:docker@localhost:5432/pg-docker?schema=public"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Course {
+  id        String   @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  name      String
+  KD        String
+  GamerTag  String
+  Platform  String
+}
```


