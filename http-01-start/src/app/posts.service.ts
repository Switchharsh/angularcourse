import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";



@Injectable({providedIn: 'root'})
export class PostsService{
    error= new Subject<string>();

    constructor(private http: HttpClient){}

    onCreatePost(postData: { title: string; content: string }) {

        this.http.post('https://angularhttp-33e0d-default-rtdb.firebaseio.com/posts.json', postData,
        {
            observe: 'response'
        }).subscribe(responseData => {
            console.log(responseData.body);
            }, error => {
                this.error.next(error.message);
            });
    }

    fetchPosts(){
        return this.http
        .get('https://angularhttp-33e0d-default-rtdb.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello'})
        })
        .pipe(
          map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)){
    
            
            postsArray.push({...responseData[key],id: key});
          }
          return postsArray
        }
      }
        ),
        catchError(errorRes =>{
        return throwError(errorRes);
        })
        );
    }

    deletePosts(){
        return this.http.delete('https://angularhttp-33e0d-default-rtdb.firebaseio.com/posts.json',
        {
            observe: 'events'
        })
        .pipe(tap(event => {
            console.log(event);
        }));
    }
}
