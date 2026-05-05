'use client';

import { useState, useEffect } from 'react';
import { Tour } from '@/data/toursData';
import { DayTour } from '@/data/dayToursData';
import { getTourPackages, getDayTours, updateTourPackage, deleteTourPackage, addTourPackage, updateDayTour, deleteDayTour, addDayTour } from '@/actions/tours';
import { DURATION_GROUPS as STATIC_DURATION_GROUPS } from '@/data/toursData';
import { DAY_TOUR_GROUPS as STATIC_DAY_TOUR_GROUPS } from '@/data/dayToursData';
import {
  Pencil, Trash2, Plus, X, Save, DollarSign, ChevronDown, ChevronUp, RotateCcw,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  Tour Packages Tab
// ─────────────────────────────────────────────────────────────
export function TourPackagesManager() {
  const [durationGroups, setDurationGroups] = useState<any[]>([]);
  const [editing, setEditing] = useState<{ gi: number; ti: number; tour: Tour } | null>(null);
  const [adding, setAdding] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const fetchTours = async () => {
    const allTours = await getTourPackages();
    const groups = STATIC_DURATION_GROUPS.map(group => ({
      ...group,
      tours: allTours.filter(t => t.groupId === group.label)
    }));
    setDurationGroups(groups);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleUpdate = async (gi: number, ti: number, updated: Tour) => {
    await updateTourPackage(updated.slug || '', updated);
    await fetchTours();
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Delete this tour?')) {
      await deleteTourPackage(slug);
      await fetchTours();
    }
  };

  const handleAdd = async (newTour: Tour) => {
    await addTourPackage(newTour);
    await fetchTours();
  };

  const allCount = durationGroups.reduce((a, g) => a + g.tours.length, 0);

  return (
    <>
      <header className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy">Tour Packages</h1>
          <p className="text-gray-500 mt-1">Manage multi-day tour packages &amp; pricing. ({allCount} tours)</p>
        </div>
      </header>

      {durationGroups.map((group, gi) => (
        <div key={gi} className="mb-6">
          <button
            onClick={() => setExpanded(expanded === gi ? null : gi)}
            className="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-navy/5 hover:border-gold/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="bg-navy text-gold text-xs font-bold px-2.5 py-1 rounded-full">{group.tours.length}</span>
              <span className="font-bold text-navy">{group.label}</span>
            </div>
            {expanded === gi ? <ChevronUp size={18} className="text-navy/40" /> : <ChevronDown size={18} className="text-navy/40" />}
          </button>

          {expanded === gi && (
            <div className="mt-2 space-y-2">
              {group.tours.map((tour: any, ti: number) => (
                <div key={ti} className="bg-white rounded-lg p-4 shadow-sm border border-navy/5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-navy text-sm truncate">{tour.title}</p>
                    <div className="flex gap-3 mt-1 text-xs text-navy/50">
                      <span>{tour.duration}</span>
                      {tour.pricingOptions && tour.pricingOptions.length > 0 && (
                        <span className="text-gold font-bold">
                          ${tour.pricingOptions[0].price} – ${tour.pricingOptions[tour.pricingOptions.length - 1].price}
                        </span>
                      )}
                      {tour.category && <span className="bg-cream px-2 py-0.5 rounded">{tour.category}</span>}
                    </div>
                  </div>
                  <button onClick={() => setEditing({ gi, ti, tour: { ...tour } })} className="p-2 text-gold hover:bg-gold/10 rounded-lg"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(tour.slug)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                </div>
              ))}
              <button
                onClick={() => setAdding(gi)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-navy/10 text-navy/40 hover:border-gold hover:text-gold transition-colors text-sm font-bold"
              >
                <Plus size={16} /> Add Tour to {group.label}
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Edit Modal */}
      {editing && (
        <TourEditModal
          tour={editing.tour}
          onSave={(updated) => { handleUpdate(editing.gi, editing.ti, updated); setEditing(null); }}
          onClose={() => setEditing(null)}
        />
      )}

      {/* Add Modal */}
      {adding !== null && (
        <TourEditModal
          tour={createBlankTour(durationGroups[adding].durationDays)}
          isNew
          onSave={(newTour) => { handleAdd(newTour); setAdding(null); }}
          onClose={() => setAdding(null)}
        />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  Day Tours Tab
// ─────────────────────────────────────────────────────────────
export function DayToursManager() {
  const [dayTourGroups, setDayTourGroups] = useState<any[]>([]);
  const [editing, setEditing] = useState<{ gi: number; ti: number; tour: DayTour } | null>(null);
  const [adding, setAdding] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const fetchTours = async () => {
    const allTours = await getDayTours();
    const groups = STATIC_DAY_TOUR_GROUPS.map(group => ({
      ...group,
      tours: allTours.filter(t => t.groupId === group.id)
    }));
    setDayTourGroups(groups);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleUpdate = async (gi: number, ti: number, updated: DayTour) => {
    await updateDayTour(updated.slug || '', updated);
    await fetchTours();
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Delete this tour?')) {
      await deleteDayTour(slug);
      await fetchTours();
    }
  };

  const handleAdd = async (newTour: DayTour) => {
    await addDayTour(newTour);
    await fetchTours();
  };

  const allCount = dayTourGroups.reduce((a, g) => a + g.tours.length, 0);

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-navy">Day Tours</h1>
        <p className="text-gray-500 mt-1">Manage day tour excursions &amp; pricing. ({allCount} tours)</p>
      </header>

      {dayTourGroups.map((group, gi) => (
        <div key={gi} className="mb-6">
          <button
            onClick={() => setExpanded(expanded === gi ? null : gi)}
            className="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-navy/5 hover:border-gold/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="bg-navy text-gold text-xs font-bold px-2.5 py-1 rounded-full">{group.tours.length}</span>
              <span className="font-bold text-navy">{group.title}</span>
            </div>
            {expanded === gi ? <ChevronUp size={18} className="text-navy/40" /> : <ChevronDown size={18} className="text-navy/40" />}
          </button>

          {expanded === gi && (
            <div className="mt-2 space-y-2">
              {group.tours.map((tour: any, ti: number) => (
                <div key={ti} className="bg-white rounded-lg p-4 shadow-sm border border-navy/5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-navy text-sm truncate">{tour.title}</p>
                    <div className="flex gap-3 mt-1 text-xs text-navy/50">
                      <span>{tour.duration}</span>
                      <span className="text-gold font-bold">${tour.price}</span>
                    </div>
                  </div>
                  <button onClick={() => setEditing({ gi, ti, tour: { ...tour } })} className="p-2 text-gold hover:bg-gold/10 rounded-lg"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(tour.slug)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                </div>
              ))}
              <button
                onClick={() => setAdding(gi)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-navy/10 text-navy/40 hover:border-gold hover:text-gold transition-colors text-sm font-bold"
              >
                <Plus size={16} /> Add Day Tour
              </button>
            </div>
          )}
        </div>
      ))}

      {editing && (
        <DayTourEditModal
          tour={editing.tour}
          onSave={(updated) => { handleUpdate(editing.gi, editing.ti, updated); setEditing(null); }}
          onClose={() => setEditing(null)}
        />
      )}

      {adding !== null && (
        <DayTourEditModal
          tour={createBlankDayTour(dayTourGroups[adding].title)}
          isNew
          onSave={(newTour) => { handleAdd(newTour); setAdding(null); }}
          onClose={() => setAdding(null)}
        />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  Reset CMS Button
// ─────────────────────────────────────────────────────────────
export function ResetCMSButton() {
  return null; // Disabled for DB phase, rely on seed script
}

// ─────────────────────────────────────────────────────────────
//  Tour Package Edit Modal
// ─────────────────────────────────────────────────────────────
function TourEditModal({ tour, onSave, onClose, isNew }: { tour: Tour; onSave: (t: Tour) => void; onClose: () => void; isNew?: boolean }) {
  const [form, setForm] = useState<Tour>({ ...tour, pricingOptions: tour.pricingOptions ? [...tour.pricingOptions.map(p => ({ ...p }))] : [] });

  const set = <K extends keyof Tour>(key: K, val: Tour[K]) => setForm(prev => ({ ...prev, [key]: val }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-navy/5 p-6 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-navy">{isNew ? 'Add New Tour Package' : 'Edit Tour Package'}</h2>
          <button onClick={onClose} className="p-2 text-navy/40 hover:text-navy"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-5">
          <Field label="Title" value={form.title} onChange={v => set('title', v)} />
          <Field label="Description" value={form.description} onChange={v => set('description', v)} textarea />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Duration Label" value={form.duration} onChange={v => set('duration', v)} />
            <Field label="Duration (Days)" value={String(form.durationDays)} onChange={v => set('durationDays', Number(v) || 0)} type="number" />
          </div>
          <Field label="Image Path" value={form.image} onChange={v => set('image', v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Category" value={form.category || ''} onChange={v => set('category', v)} />
            <div>
              <label className="text-xs font-bold text-navy/60 uppercase tracking-wider block mb-1.5">Premium?</label>
              <button onClick={() => set('isPremium', !form.isPremium)} className={`px-4 py-2.5 rounded-lg border text-sm font-bold transition-colors w-full ${form.isPremium ? 'bg-gold/10 border-gold text-gold' : 'border-navy/10 text-navy/40'}`}>
                {form.isPremium ? '★ Premium' : 'Standard'}
              </button>
            </div>
          </div>
          <Field label="Tags (comma-separated)" value={(form.tags || []).join(', ')} onChange={v => set('tags', v.split(',').map(s => s.trim()).filter(Boolean))} />

          {/* Pricing Options */}
          <div>
            <label className="text-xs font-bold text-navy/60 uppercase tracking-wider block mb-2">Pricing Options</label>
            {(form.pricingOptions || []).map((opt, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input value={opt.title} onChange={e => { const p = [...(form.pricingOptions || [])]; p[i] = { ...p[i], title: e.target.value }; set('pricingOptions', p); }} placeholder="Tier name" className="flex-1 px-3 py-2 rounded-lg border border-navy/10 text-sm" />
                <div className="relative">
                  <DollarSign size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy/30" />
                  <input type="number" value={opt.price} onChange={e => { const p = [...(form.pricingOptions || [])]; p[i] = { ...p[i], price: Number(e.target.value) || 0 }; set('pricingOptions', p); }} className="w-24 pl-7 pr-2 py-2 rounded-lg border border-navy/10 text-sm" />
                </div>
                <button onClick={() => { const p = (form.pricingOptions || []).filter((_, j) => j !== i); set('pricingOptions', p); }} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
              </div>
            ))}
            <button onClick={() => set('pricingOptions', [...(form.pricingOptions || []), { title: '', price: 0, description: '' }])} className="text-gold text-xs font-bold hover:underline flex items-center gap-1 mt-1"><Plus size={12} /> Add pricing tier</button>
          </div>

          <Field label="Tour Type" value={form.tourType || ''} onChange={v => set('tourType', v)} />
          <Field label="Availability" value={form.availability || ''} onChange={v => set('availability', v)} />
          <Field label="Accommodation" value={form.accommodation || ''} onChange={v => set('accommodation', v)} />
          <Field label="Cancellation Policy" value={form.cancellationPolicy || ''} onChange={v => set('cancellationPolicy', v)} textarea />
        </div>
        <div className="sticky bottom-0 bg-white border-t border-navy/5 p-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 rounded-lg border border-navy/10 text-navy/60 text-sm font-bold hover:bg-cream">Cancel</button>
          <button onClick={() => onSave(form)} className="px-8 py-2.5 rounded-lg bg-navy text-gold text-sm font-bold hover:bg-navy/90 flex items-center gap-2 shadow-lg"><Save size={16} /> {isNew ? 'Add Tour' : 'Save Changes'}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Day Tour Edit Modal
// ─────────────────────────────────────────────────────────────
function DayTourEditModal({ tour, onSave, onClose, isNew }: { tour: DayTour; onSave: (t: DayTour) => void; onClose: () => void; isNew?: boolean }) {
  const [form, setForm] = useState<DayTour>({ ...tour, pricingOptions: tour.pricingOptions ? [...tour.pricingOptions.map(p => ({ ...p }))] : [] });

  const set = <K extends keyof DayTour>(key: K, val: DayTour[K]) => setForm(prev => ({ ...prev, [key]: val }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-navy/5 p-6 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-navy">{isNew ? 'Add New Day Tour' : 'Edit Day Tour'}</h2>
          <button onClick={onClose} className="p-2 text-navy/40 hover:text-navy"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-5">
          <Field label="Slug (URL-safe)" value={form.slug} onChange={v => set('slug', v)} />
          <Field label="Title" value={form.title} onChange={v => set('title', v)} />
          <Field label="Subtitle" value={form.subtitle} onChange={v => set('subtitle', v)} />
          <Field label="Overview" value={form.overview} onChange={v => set('overview', v)} textarea />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Duration" value={form.duration} onChange={v => set('duration', v)} />
            <Field label="Base Price ($)" value={String(form.price)} onChange={v => set('price', Number(v) || 0)} type="number" />
          </div>
          <Field label="Image Path" value={form.image} onChange={v => set('image', v)} />
          <Field label="Category" value={form.category} onChange={v => set('category', v)} />
          <Field label="Tags (comma-separated)" value={(form.tags || []).join(', ')} onChange={v => set('tags', v.split(',').map(s => s.trim()).filter(Boolean))} />

          {/* Pricing Options */}
          <div>
            <label className="text-xs font-bold text-navy/60 uppercase tracking-wider block mb-2">Pricing Options</label>
            {(form.pricingOptions || []).map((opt, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input value={opt.title} onChange={e => { const p = [...(form.pricingOptions || [])]; p[i] = { ...p[i], title: e.target.value }; set('pricingOptions', p); }} placeholder="Tier" className="flex-1 px-3 py-2 rounded-lg border border-navy/10 text-sm" />
                <div className="relative">
                  <DollarSign size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy/30" />
                  <input type="number" value={opt.price} onChange={e => { const p = [...(form.pricingOptions || [])]; p[i] = { ...p[i], price: Number(e.target.value) || 0 }; set('pricingOptions', p); }} className="w-24 pl-7 pr-2 py-2 rounded-lg border border-navy/10 text-sm" />
                </div>
                <button onClick={() => { const p = (form.pricingOptions || []).filter((_, j) => j !== i); set('pricingOptions', p); }} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
              </div>
            ))}
            <button onClick={() => set('pricingOptions', [...(form.pricingOptions || []), { title: '', price: 0, description: '' }])} className="text-gold text-xs font-bold hover:underline flex items-center gap-1 mt-1"><Plus size={12} /> Add pricing tier</button>
          </div>

          <Field label="Pickup Location" value={form.pickupLocation} onChange={v => set('pickupLocation', v)} />
          <Field label="Pickup Time" value={form.pickupTime} onChange={v => set('pickupTime', v)} />
          <Field label="Availability" value={form.availability} onChange={v => set('availability', v)} />
          <Field label="Cancellation Policy" value={form.cancellationPolicy} onChange={v => set('cancellationPolicy', v)} textarea />
        </div>
        <div className="sticky bottom-0 bg-white border-t border-navy/5 p-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 rounded-lg border border-navy/10 text-navy/60 text-sm font-bold hover:bg-cream">Cancel</button>
          <button onClick={() => onSave(form)} className="px-8 py-2.5 rounded-lg bg-navy text-gold text-sm font-bold hover:bg-navy/90 flex items-center gap-2 shadow-lg"><Save size={16} /> {isNew ? 'Add Tour' : 'Save Changes'}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Shared Helpers
// ─────────────────────────────────────────────────────────────
function Field({ label, value, onChange, textarea, type }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean; type?: string }) {
  const cls = "w-full px-3 py-2.5 rounded-lg border border-navy/10 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold";
  return (
    <div>
      <label className="text-xs font-bold text-navy/60 uppercase tracking-wider block mb-1.5">{label}</label>
      {textarea ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className={cls} />
      ) : (
        <input type={type || 'text'} value={value} onChange={e => onChange(e.target.value)} className={cls} />
      )}
    </div>
  );
}

function createBlankTour(durationDays: number): Tour {
  return {
    title: '', duration: `${durationDays} Days`, durationDays, image: '/tours-packages/Day-tour-to-Pyramids-768x600.png',
    description: '', tags: [], isPremium: false, pricingOptions: [{ title: 'Standard (4-Star)', price: 0, description: '' }, { title: 'Premium (5-Star)', price: 0, description: '' }],
    tourType: 'Private & Guided Tour', availability: 'Runs Everyday', pickupLocation: 'Your Hotel or Arrival Terminal', dropoffLocation: 'Your Hotel or Departure Terminal',
    pickupTime: 'Flexible (Typically 08:00 AM)', guideLanguages: ['English', 'Spanish', 'French', 'German'],
    highlights: [], included: [], excluded: [], accommodation: '4 or 5-Star Hotel', meals: ['Breakfast', 'Lunch'],
    importantNotes: [], cancellationPolicy: 'Free cancellation up to 48 hours before the tour start time.',
    itinerary: [{ day: 1, title: '', details: '' }], reviews: { rating: 4.5, count: 0 },
  };
}

function createBlankDayTour(category: string): DayTour {
  return {
    slug: '', title: '', subtitle: '', duration: '8 Hours', price: 0,
    image: '/tours-packages/Day-tour-to-Pyramids-768x600.png', category, tags: [],
    overview: '', itinerary: [{ stop: 1, title: '', details: '' }],
    included: [], excluded: [], highlights: [],
    pricingOptions: [{ title: 'Solo Traveler', price: 0, description: 'Private, 1 person' }],
    pickupLocation: 'Your hotel', pickupTime: '08:00 AM', availability: 'Daily',
    guideLanguages: ['English', 'French', 'Spanish'],
    importantNotes: [], cancellationPolicy: 'Free cancellation up to 48 hours before the tour.',
  };
}
