const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const dataUsers = [
    {
        username: "setiyawan",
        email: "setiyawan@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
      },
      {
        username: "admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
      },
      {
        username: "example",
        email: "example@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
      },
      {
        username: "example1",
        email: "example1@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
      },
      {
        username: "example2",
        email: "example2@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
      },
      {
        username: "example3",
        email: "example3@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
      }
];
const detailUsers = {
    users_id:1,
    address:'tegal',
    gender:'laki-laki',
    birth_date: new Date(03/04/2020),
    tlp:0874665776,
    nik:92992993,
    users_foto:"public/user_image/1615479773454-users_foto.png"
}

const dataCategories = {
  category_name: "Category 1",
  category_cover: "public/category_image/1616178256329-category_cover.png",
};

const dataBooks = [
  {
    title: "Book 1",
    publisher: "Gramedia",
    author: "Mbuh Sapa",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 1,
    category_id: 1,
  },
  {
    title: "Book 2",
    publisher: "Gramedia2",
    author: "Mbuh Sapa2",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table2",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 1,
    category_id: 1,
  },
];
const main = async () => {
  const users = await prisma.users.createMany({
    data: dataUsers,
  });
  const detailUser = await prisma.detail_users.create({
      data:detailUsers,
  })
  const categories = await prisma.category.create({
    data: dataCategories,
  });
  const books = await prisma.books.createMany({
    data: dataBooks,
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
