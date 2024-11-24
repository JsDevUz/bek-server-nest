import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { RoleService } from './role.service';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Role } from './schemas/role.schema';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Get()
  //   @Roles(Role.Admin)
  //   @UseGuards(AuthGuard(), RolesGuard)
  async getAllBooks(@Query() query: ExpressQuery): Promise<Role[]> {
    return this.roleService.findAll(query);
  }
  @Post()
  //   @UseGuards(AuthGuard())
  async createBook(@Body() role: CreateRoleDto, @Req() req): Promise<Role> {
    return this.roleService.create(role);
  }
}
