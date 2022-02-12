import { Module } from '@nestjs/common';
import { NestConfigModule } from 'config/config.module';

@Module({
  imports: [NestConfigModule],
})
export class CommonModule {}
