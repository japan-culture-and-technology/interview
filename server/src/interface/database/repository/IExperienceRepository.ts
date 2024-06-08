import { Experience } from '../../../domain/Experience';

abstract class IExperienceRepository {
  abstract findAll(): Promise<Experience[]>;
}

export { IExperienceRepository };
