import React from 'react';
import '../Styles/BookList.css';


export default function CategoriesFilter({
  categories,
  bookList,
  listBooks,
  array,
  filterBooks,
  categoriesArray,
  setCategoriesArray,
}) {
  const [searchTermCategories, setSearchTermCategories] = React.useState('');

  const arrayOfBooks = [];



  const OnCheckBoxPress = (value) => {
    //console.log(value, " FUN");

    setSearchTermCategories(value);

    if (categoriesArray.toString().includes(value.toString())) {
      const ArrCat = categoriesArray.filter(
        (a) => a.toString() !== value.toString(),
      );
      setCategoriesArray(ArrCat);
      console.log('REMOVED');
    } else if (categoriesArray[0] === '') {
      setCategoriesArray(value);
    } else {
      const ArrCat = categoriesArray;
      ArrCat.push(value);
      setCategoriesArray(ArrCat);
    }
  };
  /*
  React.useEffect(() => {
    SetState(searchTermCategories, categoriesArray, setCategoriesArray);
  }, [searchTermCategories]);
*/
  React.useEffect(() => {
    const books = listBooks?.map((book) => {
      return book.categories.map((cat) => {
        const arr = categoriesArray.map((ar) => {
          if (ar.toString() === cat.NameOfTheCategory.toString()) {
            if (arrayOfBooks[0] === null || arrayOfBooks[0] === book) {
              arrayOfBooks[0] = book;
            } else {
              arrayOfBooks.push(book);
            }

            return book;
          }
          return null;
        });
        const filtered = arr.filter((el) => {
          return el != null;
        });
        // console.log(filtered);
        return arr;
      });
    });

    const uniqueBooks = Array.from(new Set(arrayOfBooks));

    // console.log(uniqueBooks);

    if (categoriesArray?.length === 0 && bookList.length !== 0) {
      filterBooks(bookList);
    }

    if (uniqueBooks.length !== 0) {
      filterBooks(uniqueBooks);
    }

    filterBooks(uniqueBooks);
  }, [searchTermCategories]);

  if (categories.length === 0) {
    return null;
  }
  const categ = categories?.map((cat) => {
    return (
      <tr>
        <td>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <input
              type="checkbox"
              className="filterBox"
              value={cat.NameOfTheCategory || ' '}


              onChange={(e) => OnCheckBoxPress(e.target.value)}


            />
            {cat.NameOfTheCategory}
          </label>
        </td>
      </tr>
    );
  });

  return <tbody className="categoriesDivBox">{categ}</tbody>;
}
