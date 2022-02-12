import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsEnum } from 'class-validator';

export enum Environment {
  DEFAULT = '',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
  DOCKER = 'docker',
  STAGING = 'staging',
  PRODUCTION = 'production',
  TEST = 'test',
}

@Injectable()
export class NestConfigService {
  constructor(private readonly configService: ConfigService) {}

  @IsEnum(Environment)
  get nodeEnv(): Environment {
    return this.configService.get<Environment>(
      'NODE_ENV',
      Environment.PRODUCTION,
    );
  }
}
