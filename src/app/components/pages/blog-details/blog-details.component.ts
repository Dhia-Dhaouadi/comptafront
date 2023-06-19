import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
id:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
  }

  shareOnLinkedIn(u:any) {
    let url = u;
    let splitted_array = url.split ('/');
    let title = splitted_array [splitted_array.length-1];
    console.log(url,title)
    var linkedinWindow = window.open (
      'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title='+ encodeURIComponent(title),
      'linkedin-popup',
      'height=550,width=525,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes'
    );
  }

}
