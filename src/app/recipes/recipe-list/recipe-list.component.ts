import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from './recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is a test','https://islandinthenet.com/wp-content/uploads/2023/02/X-T3_20230213_9164_Edit-3-960x640.jpg' ),
    new Recipe('A Test Recipe', 'This is a test','https://islandinthenet.com/wp-content/uploads/2023/02/X-T3_20230213_9164_Edit-3-960x640.jpg' )

  ];
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
