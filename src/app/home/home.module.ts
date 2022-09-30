import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BlogsComponent },
      { path: 'blog/:id', component: SingleBlogComponent },
      { path: 'write', component: WriteBlogComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    BlogsComponent,
    SingleBlogComponent,
    FooterComponent,
    WriteBlogComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
