package dz.ecomerce.book.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.ecomerce.book.store.entity.Book;



public interface BookRepository extends JpaRepository<Book, Long> {

}
