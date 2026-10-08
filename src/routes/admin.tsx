import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/admin")({
  component: AdminPage,
})

type Segmento = "pizzaria" | "barbearia" | "salao" | "estetica" | "loja" | "autonomo"
type Cliente = { id: string; nome: string; segmento: Segmento; ativo: boolean; pedidos: number; agendamentos: number }

const segmentos: { value: Segmento; label: string; icon: string }[] = [
  { value: "pizzaria", label: "Restaurante / Pizzaria", icon: "🍕" },
  { value: "barbearia", label: "Barbearia", icon: "💈" },
  { value: "salao", label: "Salão", icon: "💇" },
  { value: "estetica", label: "Estética / Manicure", icon: "💅" },
  { value: "loja", label: "Loja", icon: "🛍️" },
  { value: "autonomo", label: "Profissional Autônomo", icon: "🧑‍💼" },
]

const initialClientes: Cliente[] = [
  { id: "1", nome: "Cantina Bella Massa", segmento: "pizzaria", ativo: true, pedidos: 128, agendamentos: 0 },
  { id: "2", nome: "Navalha Prime", segmento: "barbearia", ativo: true, pedidos: 0, agendamentos: 43 },
  { id: "3", nome: "Studio Liss", segmento: "salao", ativo: false, pedidos: 0, agendamentos: 21 },
  { id: "4", nome: "Bella Unhas", segmento: "estetica", ativo: true, pedidos: 0, agendamentos: 18 },
]

function AdminPage() {
  const [clientes, setClientes] = useState<Cliente[]>(initialClientes)
  const [nome, setNome] = useState("")
  const [segmento, setSegmento] = useState<Segmento>("pizzaria")

  const toggleAtivo = (id: string) => {
    setClientes((prev) => prev.map((c) => (c.id === id ? { ...c, ativo: !c.ativo } : c)))
  }

  const criarCliente = () => {
    if (!nome.trim()) return
    setClientes((prev) => [{ id: String(Date.now()), nome: nome.trim(), segmento, ativo: true, pedidos: 0, agendamentos: 0 }, ...prev])
    setNome("")
  }

  return (
    <div className="min-h-screen bg-[#f8f7fb] text-zinc-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-black text-sm">CF</div>
            <div>
              <p className="font-extrabold leading-none tracking-tight">Clique Fácil Digital</p>
              <p className="text-xs text-zinc-500">Painel administrativo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2">Ver site</Link>
            <Button className="rounded-full bg-violet-600 hover:bg-violet-700 shadow-sm">Novo cliente</Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Gerencie suas páginas em um só lugar</h1>
          <p className="text-zinc-500 max-w-2xl">Crie modelos uma vez e gere páginas para vários clientes sem começar do zero. Ative, edite e acompanhe pedidos e agendamentos.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="rounded-2xl border-zinc-200 shadow-sm">
            <CardContent className="p-5"><p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Clientes</p><p className="text-3xl font-black mt-1">{clientes.length}</p><p className="text-xs text-emerald-600 mt-1 font-medium">{clientes.filter(c=>c.ativo).length} ativos</p></CardContent>
          </Card>
          <Card className="rounded-2xl border-zinc-200 shadow-sm">
            <CardContent className="p-5"><p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Pedidos hoje</p><p className="text-3xl font-black mt-1">27</p><p className="text-xs text-zinc-500 mt-1">+12% vs ontem</p></CardContent>
          </Card>
          <Card className="rounded-2xl border-zinc-200 shadow-sm">
            <CardContent className="p-5"><p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Agendamentos</p><p className="text-3xl font-black mt-1">14</p><p className="text-xs text-zinc-500 mt-1">5 pendentes</p></CardContent>
          </Card>
          <Card className="rounded-2xl border-zinc-200 shadow-sm bg-violet-600 text-white border-violet-600">
            <CardContent className="p-5"><p className="text-xs text-violet-100 uppercase tracking-widest font-semibold">Modelos</p><p className="text-lg font-bold mt-1 leading-tight">6 segmentos prontos</p><p className="text-xs text-violet-100 mt-2">Pizzaria, barbearia, salão e mais</p></CardContent>
          </Card>
        </div>

        <Tabs defaultValue="clientes" className="w-full">
          <TabsList className="bg-white border border-zinc-200 rounded-full p-1 h-auto">
            <TabsTrigger value="clientes" className="rounded-full data-[state=active]:bg-zinc-900 data-[state=active]:text-white px-5 py-2">Clientes</TabsTrigger>
            <TabsTrigger value="pedidos" className="rounded-full data-[state=active]:bg-zinc-900 data-[state=active]:text-white px-5 py-2">Pedidos</TabsTrigger>
            <TabsTrigger value="agendamentos" className="rounded-full data-[state=active]:bg-zinc-900 data-[state=active]:text-white px-5 py-2">Agendamentos</TabsTrigger>
          </TabsList>

          <TabsContent value="clientes" className="mt-6">
            <div className="grid lg:grid-cols-[380px_1fr] gap-6">
              <Card className="rounded-2xl border-zinc-200 shadow-sm h-fit">
                <CardHeader><CardTitle className="text-lg">Criar nova página</CardTitle><p className="text-sm text-zinc-500">Escolha o segmento e personalize depois</p></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome da empresa</Label>
                    <Input id="nome" placeholder="Ex: Cantina Bella Massa" value={nome} onChange={(e)=>setNome(e.target.value)} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Segmento</Label>
                    <Select value={segmento} onValueChange={(v)=>setSegmento(v as Segmento)}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {segmentos.map((s)=>(<SelectItem key={s.value} value={s.value}>{s.icon} {s.label}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {segmentos.slice(0,6).map((s)=>(<div key={s.value} onClick={()=>setSegmento(s.value)} className={`cursor-pointer rounded-xl border p-3 text-center text-xs font-medium ${segmento===s.value ? "bg-violet-600 text-white border-violet-600" : "bg-white border-zinc-200 hover:border-zinc-300"}`}><span className="text-lg">{s.icon}</span><p className="mt-1 leading-none">{s.label.split("/")[0]}</p></div>))}
                  </div>
                  <Button onClick={criarCliente} className="w-full rounded-full bg-zinc-900 hover:bg-black h-11 text-sm font-semibold">Criar página</Button>
                  <p className="text-xs text-zinc-500 text-center">Você poderá editar logo, cores, textos, imagens e produtos.</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-zinc-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Clientes cadastrados</CardTitle>
                  <Badge variant="secondary" className="rounded-full bg-zinc-100">{clientes.length} total</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  {clientes.map((c)=>(
                    <div key={c.id} className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 bg-white hover:shadow-sm transition">
                      <div className="w-11 h-11 rounded-xl bg-zinc-900 text-white flex items-center justify-center text-lg">{segmentos.find(s=>s.value===c.segmento)?.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold leading-none truncate">{c.nome}</p>
                        <p className="text-xs text-zinc-500 mt-1">{segmentos.find(s=>s.value===c.segmento)?.label} • {c.pedidos || c.agendamentos} {c.segmento==="pizzaria" || c.segmento==="loja" ? "pedidos" : "agendamentos"}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 text-xs"><span className={c.ativo ? "text-emerald-600 font-medium" : "text-zinc-400"}>{c.ativo ? "Ativa" : "Inativa"}</span><Switch checked={c.ativo} onCheckedChange={()=>toggleAtivo(c.id)} /></div>
                        <Link to="/cliente/$id" params={{ id: c.id }} className="text-xs font-semibold bg-white border border-zinc-200 rounded-full px-4 py-2 hover:bg-zinc-50">Ver página</Link>
                      </div>
                    </div>
                  ))}
                  <Separator className="my-2" />
                  <p className="text-xs text-zinc-500">Dica: clique em &quot;Ver página&quot; para visualizar como o cliente vê. Ative/desative para controlar a publicação.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pedidos" className="mt-6">
            <Card className="rounded-2xl border-zinc-200 shadow-sm">
              <CardHeader><CardTitle>Gerenciar pedidos</CardTitle><p className="text-sm text-zinc-500">Acompanhe pedidos das páginas de restaurante e loja</p></CardHeader>
              <CardContent className="space-y-3">
                {[ {id:"#1823", cliente:"Cantina Bella Massa", item:"Pizza Grande + Refrigerante", total:"R$ 89,90", status:"Novo"}, {id:"#1822", cliente:"Cantina Bella Massa", item:"2x Marmitex", total:"R$ 54,00", status:"Em preparo"}, {id:"#1821", cliente:"Loja Exemplo", item:"Kit Estética", total:"R$ 129,00", status:"Entregue"} ].map((p)=>(
                  <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border border-zinc-200">
                    <div><p className="font-bold text-sm">{p.id} • {p.cliente}</p><p className="text-sm text-zinc-600">{p.item}</p></div>
                    <div className="flex items-center gap-3"><span className="font-bold text-sm">{p.total}</span><Badge className={`rounded-full ${p.status==="Novo" ? "bg-amber-500" : p.status==="Em preparo" ? "bg-violet-600" : "bg-emerald-600"}`}>{p.status}</Badge></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agendamentos" className="mt-6">
            <Card className="rounded-2xl border-zinc-200 shadow-sm">
              <CardHeader><CardTitle>Gerenciar agendamentos</CardTitle><p className="text-sm text-zinc-500">Barbearia, salão e estética</p></CardHeader>
              <CardContent className="space-y-3">
                {[ {hora:"09:30", cliente:"Marcos S.", servico:"Corte + Barba", prof:"Navalha Prime"}, {hora:"11:00", cliente:"Julia M.", servico:"Escova", prof:"Studio Liss"}, {hora:"14:30", cliente:"Ana P.", servico:"Manicure", prof:"Bella Unhas"} ].map((a,i)=>(
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-zinc-200">
                    <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm">{a.hora}</div><div><p className="font-semibold text-sm">{a.servico}</p><p className="text-xs text-zinc-500">{a.cliente} • {a.prof}</p></div></div>
                    <Badge variant="outline" className="rounded-full">Confirmado</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
