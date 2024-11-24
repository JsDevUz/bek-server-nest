// import { RoleSchema } from './schemas/role.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleSchema } from './schemas/role.schema';
import { ActionModule } from 'src/actions/action.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Role', schema: RoleSchema }]),
    AuthModule,
    ActionModule,
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
