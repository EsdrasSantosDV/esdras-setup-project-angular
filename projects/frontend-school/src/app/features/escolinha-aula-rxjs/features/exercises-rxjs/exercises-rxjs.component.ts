import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExercicioOneComponent } from '../../ui/exercicio-one/exercicio-one.component';
import { ExercicioThreeComponent } from '../../ui/exercicio-three/exercicio-three.component';
import { ExercicioFourComponent } from '../../ui/exercicio-four/exercicio-four.component';
import { ExercicioFiveComponent } from '../../ui/exercicio-five/exercicio-five.component';
import { ExercicioTwoComponent } from '../../ui/exercicio-two/exercicio-two.component';
import { ExercicioSevenComponent } from '../../ui/exercicio-seven/exercicio-seven.component';
import { ExercicioEightComponent } from '../../ui/exercicio-eight/exercicio-eight.component';
import { ExercicioTenComponent } from '../../ui/exercicio-ten/exercicio-ten.component';
import { ExercicioNineComponent } from '../../ui/exercicio-nine/exercicio-nine.component';
import { ExercicioSixComponent } from '../../ui/exercicio-six/exercicio-six.component';
import { ExerciseElevenComponent } from '../../ui/exercise-eleven/exercise-eleven.component';
import { ExerciseTwelveComponent } from '../../ui/exercise-twelve/exercise-twelve.component';
import { ExerciseThirteenComponent } from '../../ui/exercise-thirteen/exercise-thirteen.component';
import { ExerciseFourteenComponent } from '../../ui/exercise-fourteen/exercise-fourteen.component';
import { ExerciseFifteenComponent } from '../../ui/exercise-fifteen/exercise-fifteen.component';
import { ExerciseSixteenComponent } from '../../ui/exercise-sixteen/exercise-sixteen.component';

@Component({
  selector: 'esdras-khan-exercises-rxjs',
  standalone: true,
  imports: [
    MatTabsModule,
    ExercicioOneComponent,
    ExercicioThreeComponent,
    ExercicioFourComponent,
    ExercicioFiveComponent,
    ExercicioTwoComponent,
    ExercicioSevenComponent,
    ExercicioEightComponent,
    ExercicioTenComponent,
    ExercicioNineComponent,
    ExercicioSixComponent,
    ExerciseElevenComponent,
    ExerciseTwelveComponent,
    ExerciseThirteenComponent,
    ExerciseFourteenComponent,
    ExerciseFifteenComponent,
    ExerciseSixteenComponent,
  ],
  templateUrl: './exercises-rxjs.component.html',
  styleUrl: './exercises-rxjs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesRxjsComponent {}
