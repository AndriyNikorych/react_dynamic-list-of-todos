/// <reference types="react-scripts" />

type Todo = {
  id: number,
  userId: number;
  title: string,
  completed: boolean,
};

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}