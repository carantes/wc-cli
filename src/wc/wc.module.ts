import { Module } from '@nestjs/common';
import { WCCommand } from './wc.command';
import { WCService } from './wc.service';

@Module({
  providers: [WCService, WCCommand],
})
export class WCModule {}
