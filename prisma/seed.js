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
const detailUsers = [
    {
        users_id:1,
        address:'tegal',
        gender:'laki-laki',
        birth_date: new Date(03/04/2020),
        tlp:0874665776,
        nik:92992993,
        users_foto:"public/user_image/1615479773454-users_foto.png"
    },
    {
        users_id:2,
        address:'tegal',
        gender:'laki-laki',
        birth_date: new Date(03/04/2020),
        tlp:0874665776,
        nik:92992993,
        users_foto:"public/user_image/1615479773454-users_foto.png"
    },
    {
        users_id:3,
        address:'tegal',
        gender:'laki-laki',
        birth_date: new Date(03/04/2020),
        tlp:0874665776,
        nik:92992993,
        users_foto:"public/user_image/1615479773454-users_foto.png"
    },
    {
        users_id:4,
        address:'tegal',
        gender:'laki-laki',
        birth_date: new Date(03/04/2020),
        tlp:0874665776,
        nik:92992993,
        users_foto:"public/user_image/1615479773454-users_foto.png"
    },
    {
        users_id:5,
        address:'tegal',
        gender:'laki-laki',
        birth_date: new Date(03/04/2020),
        tlp:0874665776,
        nik:92992993,
        users_foto:"public/user_image/1615479773454-users_foto.png"
    },
    {
        users_id:6,
        address:'tegal',
        gender:'laki-laki',
        birth_date: new Date(03/04/2020),
        tlp:0874665776,
        nik:92992993,
        users_foto:"public/user_image/1615479773454-users_foto.png"
    },
];

const dataCategories = [
    {
        category_name: "Novel",
        category_cover: "public/category_image/1616178256329-category_cover.png",
      },
      {
        category_name: "Cergam",
        category_cover: "public/category_image/1616178256329-category_cover.png",
      },
      {
        category_name: "Komik",
        category_cover: "public/category_image/1616178256329-category_cover.png",
      },
      {
        category_name: "Ensiklopedi",
        category_cover: "public/category_image/1616178256329-category_cover.png",
      },
      {
        category_name: "Antologi",
        category_cover: "public/category_image/1616178256329-category_cover.png",
      }
];

const dataBooks = [
  {
    title: "The Most Powerful Idea in the World",
    publisher: "Gramedia",
    author: "Vaclav Smil",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 1,
    category_id: 1,
  },
  {
    title: "Behind The Beautiful Forevers",
    publisher: "Gramedia2",
    author: "Bill gates",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table2",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 1,
    category_id: 1,
  },
  {
    title: "Sould We Eat Meat",
    publisher: "Gramedia3",
    author: "We Eas Randy",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table3",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 2,
    category_id: 2,
  },
  {
    title: "The Emperor of Maladies",
    publisher: "Gramedia4",
    author: "Vaclak Smiill",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table4",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 3,
    category_id: 4,
  },
  {
    title: "Enligtenment Now ",
    publisher: "Gramedia5",
    author: "Mbuh Sapa5",
    isbn: 1234567,
    pages: 200,
    description: "Test Seeding Book Table5",
    cover_books: "public/book_image/1615294764016-cover_books.png",
    users_id: 3,
    category_id: 1,
  },
];
const main = async () => {
  const users = await prisma.users.createMany({
    data: dataUsers,
  });
  const detailUser = await prisma.detail_users.createMany({
      data:detailUsers,
  })
  const categories = await prisma.category.createMany({
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
