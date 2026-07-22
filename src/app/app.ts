import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ServiceHighlight {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly companyName = 'Pest Control Company';
  protected readonly phoneNumber = '(555) 014-9000';
  protected readonly serviceHighlights: readonly ServiceHighlight[] = [
    {
      title: 'Residential protection',
      description: 'Seasonal inspections and treatments that help keep homes free from pests year-round.',
    },
    {
      title: 'Commercial service plans',
      description: 'Documented prevention programs for offices, restaurants, and managed properties.',
    },
    {
      title: 'Eco-conscious solutions',
      description: 'Integrated pest management strategies focused on long-term prevention and safety.',
    },
  ];
  protected readonly trustSignals = [
    'Licensed and insured technicians',
    'Fast booking for urgent pest issues',
    'Service reminders and follow-up visits',
  ] as const;
}
