import { Experience } from '../../domain/Experience';
import { IExperienceRepository } from '../../interface/database/repository/IExperienceRepository';

class FindExperienceUsecase {
  private experienceRepository: IExperienceRepository;

  public constructor(experienceRepository: IExperienceRepository) {
    this.experienceRepository = experienceRepository;
  }

  public getAllExperiences(): Promise<Experience[]> {
    return this.experienceRepository.findAll();
  }
}

export { FindExperienceUsecase };
