-- CreateTable
CREATE TABLE "books" (
    "id_books" SERIAL NOT NULL,
    "title" TEXT,
    "publisher" TEXT,
    "author" TEXT,
    "isbn" INTEGER,
    "pages" INTEGER,
    "description" TEXT,
    "cover_books" TEXT,
    "users_id" INTEGER,
    "category_id" INTEGER,
    "user" INTEGER,

    PRIMARY KEY ("id_books")
);

-- CreateTable
CREATE TABLE "borrow" (
    "id_borrow" SERIAL NOT NULL,
    "date_start" DATE,
    "date_end" DATE,
    "id_books" INTEGER,
    "id_users" INTEGER,

    PRIMARY KEY ("id_borrow")
);

-- CreateTable
CREATE TABLE "category" (
    "id_category" SERIAL NOT NULL,
    "category_name" TEXT,
    "category_cover" TEXT,

    PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "discuss" (
    "id_discuss" SERIAL NOT NULL,
    "diskusi" TEXT,
    "books_id" INTEGER,
    "id_users" INTEGER,

    PRIMARY KEY ("id_discuss")
);

-- CreateTable
CREATE TABLE "users" (
    "id_users" SERIAL NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "password" TEXT,
    "books" TEXT[],

    PRIMARY KEY ("id_users")
);

-- CreateTable
CREATE TABLE "rating" (
    "id_rating" SERIAL NOT NULL,
    "id_books" INTEGER,
    "rating" DOUBLE PRECISION,
    "id_users" INTEGER,

    PRIMARY KEY ("id_rating")
);

-- CreateTable
CREATE TABLE "detail_users" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER,
    "nik" INTEGER,
    "users_foto" TEXT,
    "address" TEXT,
    "tlp" INTEGER,
    "gender" TEXT,
    "birth_date" DATE,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD FOREIGN KEY ("category_id") REFERENCES "category"("id_category") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD FOREIGN KEY ("users_id") REFERENCES "users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow" ADD FOREIGN KEY ("id_books") REFERENCES "books"("id_books") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow" ADD FOREIGN KEY ("id_users") REFERENCES "users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discuss" ADD FOREIGN KEY ("books_id") REFERENCES "books"("id_books") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discuss" ADD FOREIGN KEY ("id_users") REFERENCES "users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD FOREIGN KEY ("id_books") REFERENCES "books"("id_books") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_users" ADD FOREIGN KEY ("users_id") REFERENCES "users"("id_users") ON DELETE SET NULL ON UPDATE CASCADE;
