import { Launch } from '@/launch/launch.model'

export type LaunchCreateDto = Pick<
  Launch,
  'mission' | 'rocket' | 'destination' | 'launchDate'
>
