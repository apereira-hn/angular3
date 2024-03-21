import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions!: Transaction[];
  order: string = 'id';
  reverse: boolean = false;
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  sortTransactions(header: keyof Transaction) {
    this.order = header;
    this.reverse = !this.reverse;

    this.transactions.sort((a: Transaction, b: Transaction) => {
      if (a[header] < b[header]) {
        return this.reverse ? 1 : -1;
      }
      if (a[header] > b[header]) {
        return this.reverse ? -1 : 1;
      }
      return 0;
    });
  }
}
