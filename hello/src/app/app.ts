import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nome:string = 'Lucas'
}
