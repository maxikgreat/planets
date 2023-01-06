import { LaunchType } from '@/launch/launch.model'

export type LaunchCreateDto = Pick<
  LaunchType,
  'mission' | 'rocket' | 'destination' | 'launchDate'
>
