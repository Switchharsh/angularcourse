import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
  })
  export class RecipeListComponent {
  @Output()  recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A Test Recipe','This is a test',
  'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg'),
  new Recipe('Another Test Recipe','This is a test',
  'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg')
];
onReceipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);

}
}