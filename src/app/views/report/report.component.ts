import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FaixaEtaria } from './model/faixaEtaria';
import { IncidenciaExame } from './model/incidenciaExame';
import { Regiao } from './model/regiao';
import { FaixaEtariaService } from './service/faixaEtaria.service';
import { IncidenciaExameService } from './service/incidenciaExame.service';
import { RegiaoService } from './service/regiao.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  regioes: Regiao[] = [];
  incidenciaExame: IncidenciaExame[] = [];
  faixaEtaria: FaixaEtaria[] = [];

  readonly subscriptions = new Subscription();

  constructor(private regiaoService: RegiaoService,
    private incidenciaExameService: IncidenciaExameService,
    private faixaEtariaService: FaixaEtariaService,
    ) 
    { }

  ngOnInit(): void {    
    this.listarRegioes();
    this.listarIncidenciaExame();
    this.listarFaixaEtaria();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private listarRegioes(): void {
    const subscription = this.regiaoService.listRegioes().subscribe((data => {this.regioes = data;}));
    this.subscriptions.add(subscription);
  }

  private listarIncidenciaExame(): void {
    const subscription = this.incidenciaExameService.listIncidenciaExame().subscribe((data => {this.incidenciaExame = data;}));
    this.subscriptions.add(subscription);
  }

  private listarFaixaEtaria(): void {
    const subscription = this.faixaEtariaService.listFaixaEtaria().subscribe((data => {this.faixaEtaria = data;}));
    this.subscriptions.add(subscription);
  }

}
