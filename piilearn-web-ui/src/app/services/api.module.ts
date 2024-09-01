/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { YearService } from './services/year.service';
import { VariantService } from './services/variant.service';
import { UserService } from './services/user.service';
import { SubjectsService } from './services/subjects.service';
import { SeasonService } from './services/season.service';
import { MultipleChoiceQuestionsService } from './services/multiple-choice-questions.service';
import { MultipleChoiceOptionsService } from './services/multiple-choice-options.service';
import { ExamBoardService } from './services/exam-board.service';
import { EducationLevelService } from './services/education-level.service';
import { AuthenticationService } from './services/authentication.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    YearService,
    VariantService,
    UserService,
    SubjectsService,
    SeasonService,
    MultipleChoiceQuestionsService,
    MultipleChoiceOptionsService,
    ExamBoardService,
    EducationLevelService,
    AuthenticationService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
