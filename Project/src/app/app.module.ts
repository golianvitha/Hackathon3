import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksSelectComponent } from './stocks-select/stocks-select.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ThanksComponent } from './thanks/thanks.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { InfluencersComponent } from './influencers/influencers.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContestsComponent } from './contests/contests.component';
import { MatCardModule } from '@angular/material/card';
import { StockCategoriesComponent } from './stock-categories/stock-categories.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import { MatTableModule } from '@angular/material/table'
import { MatRippleModule } from '@angular/material/core';
import { StockStatsComponent } from './stock-stats/stock-stats.component';
import { StockSelectNewComponent } from './stock-select-new/stock-select-new.component'



@NgModule({
  declarations: [
    AppComponent,
    StocksSelectComponent,
    DialogComponent,
    ThanksComponent,
    DragDropComponent,
    InfluencersComponent,
    DashboardComponent,
    ContestsComponent,
    StockCategoriesComponent,
    MyGamesComponent,
    LeaderboardComponent,
    StockStatsComponent,
    StockSelectNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatIconModule,
    DragDropModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
