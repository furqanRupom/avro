// layout/content-layout.ts
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,Header,Footer],
  selector: 'app-content-layout',
  styleUrl: './content-layout.css',
  templateUrl: './content-layout.html',
})
export class ContentLayout {}
