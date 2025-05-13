import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_PORT, 10) || 3306, 
      username: process.env.MYSQL_USER || 'root', 
      password: process.env.MYSQL_ROOT_PASSWORD, 
      database: process.env.MYSQL_DATABASE, 
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // Synchronize schema (use only in development)
    }),
    ClientModule,
    WalletModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
