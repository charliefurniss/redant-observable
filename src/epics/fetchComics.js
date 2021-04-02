import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { fetchFulfilled } from '../actions/comicsActions';

const API =
  'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288';

export function fetchComicsEpic() {
  return ajax.getJSON(API).pipe(
    map((res) => {
      return fetchFulfilled(res.data.results);
    })
  );
}
