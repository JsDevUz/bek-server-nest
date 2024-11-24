import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { ActionModule } from './actions/action.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
    AuthModule,
    RoleModule,
    ActionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
