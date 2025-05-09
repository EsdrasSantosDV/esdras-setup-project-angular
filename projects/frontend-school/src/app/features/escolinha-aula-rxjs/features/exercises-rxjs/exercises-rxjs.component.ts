import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExercicioEightComponent } from '../../ui/exercicio-eight/exercicio-eight.component';
import { ExercicioFiveComponent } from '../../ui/exercicio-five/exercicio-five.component';
import { ExercicioFourComponent } from '../../ui/exercicio-four/exercicio-four.component';
import { ExercicioNineComponent } from '../../ui/exercicio-nine/exercicio-nine.component';
import { ExercicioOneComponent } from '../../ui/exercicio-one/exercicio-one.component';
import { ExercicioSevenComponent } from '../../ui/exercicio-seven/exercicio-seven.component';
import { ExercicioSixComponent } from '../../ui/exercicio-six/exercicio-six.component';
import { ExercicioTenComponent } from '../../ui/exercicio-ten/exercicio-ten.component';
import { ExercicioThreeComponent } from '../../ui/exercicio-three/exercicio-three.component';
import { ExercicioTwoComponent } from '../../ui/exercicio-two/exercicio-two.component';
import { ExerciseEighteenComponent } from '../../ui/exercise-eighteen/exercise-eighteen.component';
import { ExerciseElevenComponent } from '../../ui/exercise-eleven/exercise-eleven.component';
import { ExerciseFifteenComponent } from '../../ui/exercise-fifteen/exercise-fifteen.component';
import { ExerciseFourteenComponent } from '../../ui/exercise-fourteen/exercise-fourteen.component';
import { ExerciseNineteenComponent } from '../../ui/exercise-nineteen/exercise-nineteen.component';
import { ExerciseSeventeenComponent } from '../../ui/exercise-seventeen/exercise-seventeen.component';
import { ExerciseSixteenComponent } from '../../ui/exercise-sixteen/exercise-sixteen.component';
import { ExerciseThirteenComponent } from '../../ui/exercise-thirteen/exercise-thirteen.component';
import { ExerciseTwelveComponent } from '../../ui/exercise-twelve/exercise-twelve.component';
import { ExerciseTwentyComponent } from '../../ui/exercise-twenty/exercise-twenty.component';

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
    ExerciseSeventeenComponent,
    ExerciseEighteenComponent,
    ExerciseNineteenComponent,
    ExerciseTwentyComponent,
  ],
  templateUrl: './exercises-rxjs.component.html',
  styleUrl: './exercises-rxjs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesRxjsComponent {}
