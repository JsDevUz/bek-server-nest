// import { RoleSchema } from './schemas/role.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';
import { ActionSchema } from './schemas/action.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Action', schema: ActionSchema }]),
    AuthModule,
  ],
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
