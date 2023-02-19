import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buddhi-nav',
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" *ngFor="let item of navItems">
          <a class="nav-link active" aria-current="page" [routerLink]="item.link">{{item.name}}</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class NavComponent implements OnInit {

  navItems = [
    {
      name: 'Home',
      link: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
