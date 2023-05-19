import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  dtOptions: DataTables.Settings = {};
  customers:any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };

    this.api.getClients().subscribe(
      (response) => {
        console.log(response);
        this.customers = response;
      }
    )

    // this.http
    //   .get('http://jsonplaceholder.typicode.com/posts')
    //   .subscribe((posts) => {
    //     this.posts = posts;
    //   });
  }
}
