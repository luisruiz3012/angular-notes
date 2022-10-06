import { Component, VERSION } from '@angular/core';

type Task = {
  title: string;
  description: string;
};

type User = {
  username: string;
  password: string;
  tasks: Task[];
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  password: string = '';

  title: string = '';
  description: string = '';

  userLoggedIn: boolean = false;
  showModal: boolean = false;

  loggedUser: User;

  users: User[] = [
    {
      username: 'Luis',
      password: '1234',
      tasks: [
        {
          title: 'Finish angular course',
          description: 'I need to complete the angular course',
        },
        {
          title: 'Finish angular components course',
          description: 'I need to complete the angular components course',
        },
      ],
    },
    {
      username: 'Nicobytes',
      password: 'angular',
      tasks: [],
    },
  ];

  formSubmit() {
    const foundUser = this.users.find(
      (user) => user.username === this.username
    );

    if (!foundUser) {
      alert('Incorrect credential, please try again');
      this.username = '';
      this.password = '';
      return;
    }

    if (foundUser.password !== this.password || this.password === '') {
      alert('Incorrect credentials, please try again');
      this.username = '';
      this.password = '';
      return;
    }

    this.loggedUser = foundUser;
    this.userLoggedIn = true;
  }
}
