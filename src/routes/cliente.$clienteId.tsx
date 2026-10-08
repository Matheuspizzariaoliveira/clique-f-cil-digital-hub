import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Share2, ShoppingCart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export const Route = createFileRoute('/cliente/$clienteId')({
  component: ClientePage,
});

function ClientePage() {
  const { clienteId } = Route.useParams();
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Dados de exemplo - serão substituídos por dados reais do banco
  const clienteData = {
    id: clienteId,
    nome: 'Pizzaria Bella Napoli',
    descricao: 'A melhor pizza artesanal da cidade, feita com ingredientes frescos e massa fermentada naturalmente por 48 horas.',
    logo: 'https://cofly.app.br/api/public/img?prompt=italian%20pizza%20restaurant%20logo%20elegant%20modern%20design&width=200&height=200&seed=101',
    banner: 'https://cofly.app.br/api/public/img?prompt=italian%20pizza%20oven%20fire%20warm%20lighting%20professional%20kitchen&width=1280&height=400&seed=102',
    whatsapp: '11999999999',
    instagram: '@bellanapoli',
    endereco: 'Rua das Flores, 123 - Centro',
    horario: 'Ter-Dom: 18h-23h',
    segmento: 'pizzaria',
    cores: {
      primaria: '#D32F2F',
      secundaria: '#FFA000',
      fundo: '#FFF8E1',
    },
    produtos: [
      {
        id: 1,
        nome: 'Margherita',
        descricao: 'Molho de tomate, mussarela, manjericão fresco',
        preco: 45.00,
        categoria: 'pizzas',
        imagem: 'https://cofly.app.br/api/public/img?prompt=margherita%20pizza%20fresh%20basil%20mozzarella%20wood%20fired&width=400&height=400&seed=201',
      },
      {
        id: 2,
        nome: 'Calabresa',
        descricao: 'Calabresa artesanal, cebola, azeitonas',
        preco: 48.00,
        categoria: 'pizzas',
        imagem: 'https://cofly.app.br/api/public/img?prompt=calabresa%20pizza%20sausage%20onions%20olives%20rustic&width=400&height=400&seed=202',
      },
      {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, gorgonzola, parmesão, provolone',
        preco: 52.00,
        categoria: 'pizzas',
        imagem: 'https://cofly.app.br/api/public/img?prompt=four%20cheese%20pizza%20melted%20cheese%20gourmet&width=400&height=400&seed=203',
      },
      {
        id: 4,
        nome: 'Coca-Cola 2L',
        descricao: 'Refrigerante gelado',
        preco: 12.00,
        categoria: 'bebidas',
        imagem: 'https://cofly.app.br/api/public/img?prompt=soda%20bottle%20cold%20drink%20ice%20refreshing&width=400&height=400&seed=204',
      },
    ],
    formasPagamento: ['Dinheiro', 'Pix', 'Cartão de Crédito', 'Cartão de Débito'],
    aceitaPedidos: true,
    aceitaAgendamentos: false,
  };

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'pizzas', nome: 'Pizzas' },
    { id: 'bebidas', nome: 'Bebidas' },
  ];

  const produtosFiltrados = selectedCategory === 'todos'
    ? clienteData.produtos
    : clienteData.produtos.filter(p => p.categoria === selectedCategory);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/55${clienteData.whatsapp}`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${clienteData.instagram.replace('@', '')}`, '_blank');
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: clienteData.nome,
        text: clienteData.descricao,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    }
  };

  const handlePedido = () => {
    const mensagem = `Olá! Gostaria de fazer um pedido em ${clienteData.nome}`;
    window.open(`https://wa.me/55${clienteData.whatsapp}?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={clienteData.banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Logo sobreposto */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2">
          <div className="bg-white rounded-full p-2 shadow-2xl">
            <img
              src={clienteData.logo}
              alt={clienteData.nome}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-20 pb-12">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {clienteData.nome}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {clienteData.descricao}
          </p>

          {/* Botões de ação principais */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={handleInstagram}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
              size="lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              size="lg"
              className="shadow-md"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* Informações */}
        <Card className="mb-8 shadow-lg border-0">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                  <p className="text-gray-600">{clienteData.endereco}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Horário</p>
                  <p className="text-gray-600">{clienteData.horario}</p>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <p className="font-semibold text-gray-900 mb-3">Formas de Pagamento</p>
              <div className="flex flex-wrap gap-2">
                {clienteData.formasPagamento.map((forma) => (
                  <Badge key={forma} variant="secondary" className="text-sm">
                    {forma}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cardápio/Produtos */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Nosso Cardápio
          </h2>

          {/* Filtro de categorias */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categorias.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id ? 'bg-red-600 hover:bg-red-700' : ''}
              >
                {cat.nome}
              </Button>
            ))}
          </div>

          {/* Grid de produtos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <Card key={produto.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {produto.nome}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {produto.descricao}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">
                      R$ {produto.preco.toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Botões de ação finais */}
        {clienteData.aceitaPedidos && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePedido}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white shadow-xl text-lg py-6"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Fazer Pedido pelo WhatsApp
            </Button>
            {clienteData.aceitaAgendamentos && (
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg text-lg py-6"
              >
                <Calendar className="w-6 h-6 mr-2" />
                Agendar Horário
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Página criada com <span className="text-red-500">♥</span> por Clique Fácil Digital
          </p>
        </div>
      </footer>
    </div>
  );
}
