import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };

    // this.http
    //   .get('http://jsonplaceholder.typicode.com/posts')
    //   .subscribe((posts) => {
    //     this.posts = posts;
    //   });
  }
}
