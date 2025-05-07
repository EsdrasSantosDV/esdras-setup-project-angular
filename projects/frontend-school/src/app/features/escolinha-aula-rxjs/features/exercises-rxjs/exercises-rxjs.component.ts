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
import { ExercicioElevenComponent } from '../../ui/exercise-eleven/exercise-eleven.component';
import { ExercicioTwelveComponent } from '../../ui/exercise-twelve/exercise-twelve.component';
import { ExercicioThirteenComponent } from '../../ui/exercise-thirteen/exercise-thirteen.component';
import { ExercicioFourteenComponent } from '../../ui/exercise-fourteen/exercise-fourteen.component';
import { ExercicioFifteenComponent } from '../../ui/exercise-fifteen/exercise-fifteen.component';
import { ExercicioSixteenComponent } from '../../ui/exercicio-sixteen/exercise-sixteen.component';
import { ExercicioSeventeenComponent } from '../../ui/exercicio-seventeen/exercicio-seventeen.component';
import { ExercicioNineteenComponent } from '../../ui/exercicio-nineteen/exercicio-nineteen.component';
import { ExercicioTwentyComponent } from '../../ui/exercicio-twenty/exercicio-twenty.component';
import { ExercicioEighteenComponent } from '../../ui/exercicio-eighteen/exercicio-eighteen.component';

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
    ExercicioThirteenComponent,
    ExercicioFourteenComponent,
    ExercicioFifteenComponent,
    ExercicioTwelveComponent,
    ExercicioElevenComponent,
    ExercicioSixteenComponent,
    ExercicioSeventeenComponent,
    ExercicioEighteenComponent,
    ExercicioNineteenComponent,
    ExercicioTwentyComponent,
  ],
  templateUrl: './exercises-rxjs.component.html',
  styleUrl: './exercises-rxjs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesRxjsComponent {}
