import repository from "../../repository/IdentificationTypeRepository.js";
import { CityService } from "../../services/CityService.js";
import { ClassroomService } from "../../services/ClassroomService.js";
import { CourseService } from "../../services/CourseService.js";
import { CourseScheduleService } from "../../services/CourseScheduleService.js";
import { IdentificationTypeService } from "../../services/IdentificationTypeService.js";
import { InscriptionService } from "../../services/InscriptionService.js";
import { RateService } from "../../services/RateService.js";
import { StudentService } from "../../services/StudentService.js";
import { TeacherService } from "../../services/TeacherService.js";
import { TopicService } from "../../services/TopicService.js";

export class ServiceFactory {
  static create() {
    return {
      cities: new CityService(),
      classrooms: new ClassroomService(),
      courses: new CourseService(),
      courseSchedules: new CourseScheduleService(),
      identificationTypes: new IdentificationTypeService(repository),
      inscriptions: new InscriptionService(),
      rates: new RateService(),
      students: new StudentService(),
      teachers: new TeacherService(),
      topics: new TopicService()
    };
  }
}