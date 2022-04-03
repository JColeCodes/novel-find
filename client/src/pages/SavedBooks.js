import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import { removeBookId } from '../utils/localStorage';
import { getDescription } from './SearchBooks';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [removeBook] = useMutation(REMOVE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeBook({
        variables: { bookId: bookId }
      });
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            const bookImgUrl = book.image.split('zoom=1');
            let bookImg = bookImgUrl[0] + 'zoom=0' + bookImgUrl[1];
            const cutLength = 450;
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={bookImg.includes('edge=curl') ? bookImg : book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  {book.description && <Card.Text>
                    <span>{getDescription(book.description, cutLength)}</span>
                    <Button onClick={e => {
                      const toggleButton = e.target;
                      const descriptionText = e.target.parentElement.firstChild;
                      const bookDescription = book.description + ' ';

                      if (descriptionText.textContent === bookDescription) {
                        descriptionText.textContent = getDescription(book.description, cutLength);
                        toggleButton.textContent = '▼';
                      } else {
                        descriptionText.textContent = bookDescription;
                        toggleButton.textContent = '▲';
                      }
                    }} className={`btn-toggle${getDescription(book.description, cutLength) === book.description ? ' hidden' : ''}`}
                    variant='link'>▼</Button>
                  </Card.Text>}
                  <Button
                    href={book.link}
                    target='_blank'
                    className='btn-block btn-secondary'>
                  Google Books Link</Button>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
