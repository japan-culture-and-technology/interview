import { FindExperienceUsecase } from '../../application/usecase/FindExperienceUseCase';
import { ExperienceRepository } from '../database/Memory/ExperienceRepositoryImpl';

class ExperienceController {
  private experienceRepository: ExperienceRepository;

  public constructor() {
    this.experienceRepository = new ExperienceRepository();
  }

  public async findAll(): Promise<any> {
    const useCase = new FindExperienceUsecase(this.experienceRepository);
    let result = await useCase.getAllExperiences();
    return result;
  }
}

export { ExperienceController };
