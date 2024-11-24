import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ActionService } from './action.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Action } from './schemas/action.schema';
import { CreateActionDto } from './dto/create-actions.dto';

@Controller('action')
export class ActionController {
  constructor(private actionservice: ActionService) {}
  @Get()
  //   @Roles(Role.Admin)
  //   @UseGuards(AuthGuard(), RolesGuard)
  async getAllBooks(@Query() query: ExpressQuery): Promise<Action[]> {
    return this.actionservice.findAll(query);
  }
  @Post()
  //   @UseGuards(AuthGuard())
  async createBook(
    @Body() action: CreateActionDto,
    @Req() req,
  ): Promise<Action> {
    return this.actionservice.create(action);
  }
}
